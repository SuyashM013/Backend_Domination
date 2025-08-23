const socket = io();

let local;   // hmari video 
let remote;  // samen wali ki video
let peerConnection;   // connection control

const rtcSettings = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302'
        }
    ]
} // google se leaao

const initialize = async () => {
    socket.on('signalingMessage', handlemessage);
    local = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    })

    initiateOffer();

}
const initiateOffer = async () => {
    await createPeerConnection();

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    // await socket.emit('offer', offer);
    await socket.emit('signalingMessage', JSON.stringify({ type: 'offer', offer }));
}

const createPeerConnection = async () => {
    peerConnection = new RTCPeerConnection(rtcSettings);
    remote = new MediaStream();

    document.querySelector('#remoteVideo').srcObject = remote;
    // document.querySelector('#remoteVideo').style.display = 'block'; 
    // document.querySelector('#localvideo').;

    local.getTracks().forEach((track) => {
        peerConnection.addTrack(track, local);
    })

    peerConnection.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remote.addTrack(track);
        })
    }

    peerConnection.onicecandidate =  (event) => {
        event.candidate && socket.emit(
            'signalingMessage',
            JSON.stringify({ type: 'candidate', candidate: event.candidate })
        )
    }
}

const handlemessage = async (message) => {
    const { type, offer, answer, candidate } = JSON.parse(message);

    if (type === "offer") handleOffer(offer);
    if (type === "answer") handleAnswer(answer);
    if (type === "candidate" && peerConnection) { peerConnection.addIceCandidate(candidate); }
}

const handleOffer = async (offer)=> {
    await createPeerConnection();
    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.emit('signalingMessage', JSON.stringify({ type: 'answer', answer }));

}

const handleAnswer = async (answer) => {
    if(!peerConnection.currentRemoteDescription) {
        peerConnection.setRemoteDescription(answer);
    }
}



initialize();
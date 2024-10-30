import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {// connected
        return;
    }

    if (connectionState === 2) {// connecting
        console.log("Connecting...");
        return;
    }

    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: 'restapinext14',
            bufferCommands: false
        })
        console.log("Connected");
        
    }catch(err){
        console.log("Error in connecting to database", err);
        throw new Error("Error connecting to database");
    }
}

export default connect;
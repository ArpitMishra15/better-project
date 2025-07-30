import mongoose from "mongoose"

export const connectDB =  async () => {
    try {
        //await mongoose.connect("db url that was provided");                                       //method 1 - not good as it exposes your usrnme and psswrd
        await mongoose.connect(process.env.MONGO_URI);

        
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("error connecting to MONGODB", error);
        process.exit(1);                                                                            // exit with failure
    }
};
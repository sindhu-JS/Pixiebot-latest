const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const serverUrl = " http://indev.thepixiebot.com";
const config = {
  user: "devpixiebotuser",
  password: "$4t2i8Nb8",
  host: "50.63.9.40",
  port: 21, // default FTP port
  localRoot: __dirname + "/dist", // the path to your build files
  remoteRoot: "", // the remote FTP directory
  include: ["*", "**/*"], // include all files and subdirectories
  deleteRemote: true, // delete existing files on the remote server
};

ftpDeploy
  .deploy(config)
  .then((res) => {
    //console.log("Deployment successful:", res);
    console.log("All Files pushed to Deployment successful to > ", serverUrl);
  })
  .catch((err) => {
    console.error("Error deploying:", err);
  });
ftpDeploy.on("uploading", function (data) {
  //console.log(data.totalFilesCount); // total file count being transferred
  //console.log(data.transferredFileCount); // number of files transferred
  //console.log("uploading: ", data.transferredFileCount, data.filename); // partial path with filename being uploaded
});
ftpDeploy.on("uploaded", function (data) {
  console.log(
    serverUrl + " --> uploaded: ",
    data.transferredFileCount,
    data.filename
  ); // same data as uploading event
});
ftpDeploy.on("log", function (data) {
  console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function (data) {
  console.log(data.err); // data will also include filename, relativePath, and other goodies
});

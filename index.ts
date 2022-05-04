import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as mime from "mime";


// Create an S3 bucket
let siteBucket = new aws.s3.Bucket("s3-website-bucket", {
    website: {
      indexDocument: "index.html",
    },
  });

let siteDir = "www"; // directory for content files

// For each file in the directory, create an S3 object stored in `siteBucket`
for (let item of require("fs").readdirSync(siteDir)) {
    let filePath = require("path").join(siteDir, item);
    let object = new aws.s3.BucketObject(item, {
      bucket: siteBucket,
      source: new pulumi.asset.FileAsset(filePath),     // use FileAsset to point to a file
      contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
    });
}

// Update your siteBucket declaration to this


exports.bucketName = siteBucket.bucket; // create a stack export for bucket name


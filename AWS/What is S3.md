# What is S3?

- Provides developers and IT  teams with secure, durable, highly-scalable object **storage**. 
- easy to use, with a simple web services interface to store and retrieve any amount of data from anywhere on the web.
- Safe place to store your files
- **Object-based storage** != block based storage => allows you to upload files
- files can be from 0 bytes to 5TB.
- there is unlimited storage.
- Files are stored in Buckets.
- S3 is a **universal namespace**. That is, names must be unique globally.
- when you upload a file to S3, you will receive a **HTTP 200 code** if the upload was successful.



## Object-based

- key(this is simply the name of the object)
- value(this is simple the data and is made up of a sequence of bytes)
- version ID(Important for versioning)
- Metadata(Data about data you are storing)
- Subresources;
  - access control lists
  - Torrent



## How does data consistency work for S3?

- Read after Write consistency for PUTS of new Objects
- Eventual Consistency for overwrite PUTS and DELETES(can take some time to propagate)
  - 




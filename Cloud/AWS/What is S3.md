# What is S3?

- Provides developers and IT  teams with secure, durable, highly-scalable object **storage**. 
- easy to use, with a simple web services interface to store and retrieve any amount of data from anywhere on the web.
- Safe place to store your files
- **Object-based storage** != block based storage => allows you to upload files
- files can be from 0 bytes to 5TB.
- there is unlimited storage.
- Files are stored in **Buckets**.
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
  - ex) if you write a new file and read it immediately afterwards, you will be able to view that data.
- Eventual Consistency for overwrite PUTS and DELETES(can take some time to propagate)
  - ex) if you update AN EXISTING file or delete a file and read it immediately, you may get the older version, or you may not. 
  - Changes to objects can take a little bit of time to propagate.





## S3 Features

- Tiered Storage Available
- Lifecycle Management
- Versioning
- Encryption
- Secure your data using **Access Control Lists** and **Bucket Policies.**





## S3 Type

#### S3 Standard

- stored redundantly across multiple devices in multiple facilities, and is designed to sustain the loss of 2 facilities concurrently.



#### S3 - IA

- Infrequently Accessed
- For data that is accessed less frequently, but requires rapid access when needed.
- lower fee than S3, but you are charged a retrieval fee.



#### S3 One Zone - IA

- for where you want a lower - cost option ofr infrequently accessed data, but do not require the multiple Availability Zone Data resilience.



#### S3 - Intelligent Tiering

- Designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead.
- effective for machine learning data.



#### S3 Glacier

- secure, durable and low-cost storage class for data archiving.
- Retrieval times configurable from minutes to hours.



#### S3 Glacier Deep Archive

- S3 Glacier Deep Archive is Amazon S3's **lowest-cost storage class** where a retrieval time of 12 housr is acceptable.



## S3 Charge

- Storage
- Requests
- Storage Management Pricing
- Data Transfer Pricing
- **Transfer Acceleration**
- Cross Region Replication Pricing



## S3 Transfer Acceleration

**: Fast, easy, and secure transfers of files over long distances between your end users and an S3 bucket.**

#### Advatage

- Amazone CloudFront's globally distributed edge locations.
- ex) data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.






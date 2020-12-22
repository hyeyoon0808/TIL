# What is CloudFront

A **content delivery network (CDN)** is a system of distributed servers (network) that **deliver webpages** and **other web content to a user based on the geographic locations of the user**, the origin of the webpage, and a content delivery server.

- **Edge Location** : location where content will be cached. This is seperate to an AWS Region/AZ.
- **Origin** : The origin of all the files that the CDN will distribute. This can be an S3 Bucket, an EC2 Instance, an Elastic Load Balanver, or Route 53.
- **Distribution** : this is the name given the CDN which consists of a collection of Edge Locations.

![Screen Shot 2020-12-22 at 22.29.17](/Users/chohyeyoon/Library/Application Support/typora-user-images/Screen Shot 2020-12-22 at 22.29.17.png)



> Amazon CloudFront can be used to deliver your entire website, including dynamic, static streaming, and interactive content using a global network of edge locations.

​	=> Requests for your content are automatically routed to the nearest edge 		location, so content is delivered with the best possible performance

- **Web Distribution** : Typically used for Websites.
- **RTMP** : Used for Media Streaming



=> Edge locations are **not just READ only** - you can write to them too, (ie- put an object on to them.)

=> Objects are cached for the life of the **TTL (Time To Live.)**
# Identity and Access Management (IAM)

* Allows you to manage users and their level of access to the AWS console.
* It is important to understand IAM and how it works, both for the exam and for administrating a company's AWS account in real life.



## Key features of IAM

* Centralized control of your AWS account
* shared access to your AWS account
* Granular permissions
* multi-factor authentication
* ability to provide temporary access for users, devices, and services where necessary
* A customizable password rotation policy.



## Key Terminology for IAM

#### Users

- end users, such as people, employees of an organization, etc.

#### groups

- a collecion of users.
- each user in the group will inherit the permissions of the group.

#### Roles

- you create roles and then assign them to AWS resources.

#### Policies

- policies are made up of documents, which are called policy documents. These documents are formatted in JavaScript Object Notation (JSON) and procide permissions for users, groups, and roles.
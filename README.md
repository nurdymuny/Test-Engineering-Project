Assumptions:

1. There will be a client who would registered from the company’s marketing website. Once the client registered we assume that he/she has purchased a customise company product.
2. I also assume that this system would have a superuser who would initially registered his/her company staff member.
3. In the staff login I have assumed that all the feature request will begin and complete in order of their priority set by the staff member.

Technologies Used for Development:

1. Ruby on Rails [RoR]
2. Jquery
3. Bootstrap
4. Mysql


Popular Ruby Gems Used:

1. Devise [for managing login/logout user sessions]


Admin:

Admin is that person of the company who either owns the company or manages the company on behalf of its owner.

1. Login: An Admin can either registered for a new superuser account or login using his/her existing credentials. He/she can also we set their password against they forget it.
2. Feature Request: This is a list of all the request that have been made by the company clients. Each request displays the name of the staff members who raise that request ticket and a current status of that request. It is to be noted that admin can only edit and delete a request but not create a request.
3. Staff: An admin can create profiles for new staff members that join the company. This feature is only available to admin.
4. Product Area: For the ease of this assignment we have provided staff member within and additional functionality to add product areas. A product area is considered as a unique section or module within the product that is purchase by the client.
5. Client: This is a list of all the client that the company currently has. Its simply displays the name and contact details of the each client.

Staff:

Staff member is any person who works within the company and provides a assistance to clients from time to time.

1. Login: Staff member can only login but cannot create his/her own account.
2. Feature Request: Staff member can raise a request ticket once the client confirms the details of a new feature. This functionality is only available to a staff member.
3. Product Area: For the ease of this assignment we have provided staff member within and additional functionality to add product areas. A product area is considered as a unique section or module within the product that is purchase by the client.
4. Client: This is a list of all the client that the company currently has. Its simply displays the name and contact details of the each client.

Client:

Client is any person who buys the company product or services.

1. Registration: Client can register his personal details with the company.


Website Links:

1. For Client: http://54.204.6.240/clients
2. For Admin/Staff: http://54.204.6.240/users/sign_in

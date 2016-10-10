# NoQello
The not quite Trello, project management full-stack Angular/Ruby on Rails web application. NoQSello allows you to coordinate projects and todos akin to what the Trello web application would.

##Installation
Fork and download the repo.

```cli
bundle install
```

Fire up your postgreSQL db locally and migrate the database with the following:

```cli
$ rake db:migrate  

#or 

$ rails db:migrate
```

Fire up your rails server:

```
$ rails server
```

Open up [localhost:3000](http://localhost:3000/) in your browser of choice.

##Stack

The **front-end** utilizes the following:

* Angular 1.5 
* [UI-router](https://github.com/angular-ui/ui-router)
* [Restangular](https://github.com/mgonto/restangular)
* [Xeditable plugin](https://vitalets.github.io/angular-xeditable/#)
* [Lodash](https://lodash.com/)
* Boostrap and custom css

The front-end handles the majority of the workload. Utilizing UI router and restangular the front-end can hit the Rails back-end API to update the page at first. Then it will increment the changes when committed by the user. Throughout the angular scripts you will notice a lot of promises, that's just because I don't want to get stuck in call-back hell!

The **back-end** utilizes the following:

* Rails 5.0
* PostgreSQL
* [Devise authentication gem](https://github.com/plataformatec/devise)
* Rest of the rails gem suite

The back-end is set up as an API to provide the AngularJS front-end with the correct user data.  The back-end works in tandem with the front-end to manage data, however, the back-end remains the single source of truth. The back-end will handle all authentication at this point.


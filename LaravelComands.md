~~~
php artisan make:controller controllerName
~~~
~~~
php artisan make:migration migrationName
~~~

Do the migration
~~~
php artisan migrate
~~~

Revert the migration
~~~
php artisan migrate:rollback
~~~

Refresh the migrations (It deletes rows in the table)
~~~
php artisan migrate:fresh
~~~

Refresh the migrations (It deletes rows in the table)
~~~
php artisan migrate:refresh
~~~

Create a model
~~~
php artisan make:model modelName
~~~

Delete all created tables
~~~
php artisan migrate:reset
~~~

Create a seeder.
~~~
php artisan make:seeder seederName
~~~

Run the seeders.
~~~
php artisan migrate:fresh --seed
~~~

Create a factory.
~~~
php artisan make:factory factoryName
~~~

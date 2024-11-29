# Enable mod_rewrite
RewriteEngine On

# Allow direct access to sitemap.xml and robots.txt
RewriteRule ^sitemap\.xml$ luxvilla-laravel/public/sitemap.xml [L]
RewriteRule ^robots\.txt$ luxvilla-laravel/public/robots.txt [L]

# Rewrite all other requests to luxvilla-laravel/public
RewriteCond %{REQUEST_URI} !^/luxvilla-laravel/public/
RewriteRule ^(.*)$ luxvilla-laravel/public/$1 [L]

# Protect sensitive files like .env and .htaccess
<FilesMatch "^(\.env|\.htaccess)">
  Order Allow,Deny
  Deny from all
</FilesMatch>

# Ensure the index.php file inside the public folder is used
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ luxvilla-laravel/public/index.php [L]


Above goes to .htaccess file in root
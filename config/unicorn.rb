root = "/var/www/engineering.com/current"
shared_root = "/var/www/engineering.com/shared"
working_directory root
pid "#{shared_root}/pids/unicorn.pid"
stderr_path "#{shared_root}/log/unicorn-stderr.log"
stdout_path "#{shared_root}/log/unicorn-stdout.log"

listen "#{shared_root}/sockets/unicorn.engineering.com.sock"
worker_processes 2
timeout 120
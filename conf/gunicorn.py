import multiprocessing

 
bind = "127.0.0.1:5005"
proc_name = "jspyconf"
workers = multiprocessing.cpu_count() * 2 + 1
backlog = 2048
debug = False
daemon = True
pidfile = "/tmp/" + proc_name + ".pid"
logfile = "/tmp/" + proc_name + ".log"

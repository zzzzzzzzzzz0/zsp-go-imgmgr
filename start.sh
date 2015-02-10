#!/bin/bash
d=`dirname $0`
cd $d/root
port=4001
xdg-open "http://127.0.0.1:$port"
../bin/zsp ---- -r $PWD/ -a :$port "$@"

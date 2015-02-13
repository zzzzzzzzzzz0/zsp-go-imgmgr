#!/bin/bash
cd `dirname $0`/root
../bin/zsp \
-zhscript-o-ansi \
---- -r $PWD/ -a :4001 "$@"
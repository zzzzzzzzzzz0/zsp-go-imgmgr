#!/bin/bash
cd `dirname $0`/root
../bin/zsp \
-zhscript-o-ansi \
-zhscript-o-args \
-zhscript-o-tree \
-zhscript-o-path \
-zhscript-o-lc \
-zhscript-o-lc2 \
---- -r $PWD/ -a :4001 "$@"
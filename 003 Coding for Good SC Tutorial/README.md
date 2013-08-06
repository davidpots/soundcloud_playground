# Soundcloud Sandbox

A place for me to mess around with using the Soundcloud SDK.

### 2013.08.05

Pulled from examples here:
- http://www.youtube.com/watch?v=8TuqjGxosrc
- http://connect.soundcloud.com/examples/basic.html
- http://developers.soundcloud.com/docs#playing

Had some trouble making everything worked. The culprit was (1) the JS version I was using versus that used in the examples, and (2) not having my directory hosted which created some JS loading issues. To make things work, I loaded the project directory in a server via my `launch` command which runs:

    python -m SimpleHTTPServer
    open http://localhost:8000

And then everything works.

### To do next

Check out this "Coding for GOOD" webpage, and try to get their example fully working (the YouTube video didn't work with the genre selector -- it always returned 'punk' as per his example).

    http://cfg.good.is/challenges/soundcloud-api
    
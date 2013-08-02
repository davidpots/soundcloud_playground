This is an in-progress project to help me get off the ground with the Soundcloud API, formatting the Soundcloud player, and the like. 


#### API Reference

To get an idea of what the Soundcloud API can do, check this out: 

    http://developers.soundcloud.com/docs/api/reference
    
It shows how I can retrieve info about a user, a track, a playlist, and so on. Mostly this is promising for what is possible -- not sure how much of this I'll use out of the gate (or on my first SC project).

#### Your Soundcloud User / App Info

This wasn't super obvious. To find your client ID and manage your Soundcloud apps, go here:

    http://soundcloud.com/you/apps

#### Get me the JSON ID!

A hurdle I ran into with the URL above is not having the JSON ID for the object I was interested in (my account, one of my tracks, one of my playlists, etc). The way to get the JSON ID you need is with this `resolve` command:

    # for a user
    curl 'http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/davidpots&client_id=YOUR_CLIENT_ID'
    
    # for a track
    curl 'http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/davidpots&client_id=YOUR_CLIENT_ID'
    
    # etc

When you run any of the `curl` commands above, you'll get a super concise bit of output that give you the JSON ID for the user/track/whatever in question. From there, you can use that ID to get info on that object using whatever you like from the API Reference page above.


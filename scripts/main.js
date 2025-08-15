Events.on(ClientLoadEvent, e => {
	Vars.net.handleClient(OpenURICallPacket, p=>{
            Log.info("Received url @", p.uri);
            try {
            	Vars.ui.chatfrag.addMessage("[stat]Server sent URI "+p.uri);
        	} catch (er) {
            	Log.err("Cant order message.", er);
        	}
    });
});
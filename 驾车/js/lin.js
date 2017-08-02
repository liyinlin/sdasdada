function aa() {
	$(window).load(function(){
		if((screen.width <=1366)) {
	
		$("#ln").attr({'href':'css/maps_index1.css'});
		$("#ln2").attr({'href':'css/zzsc1.css'});

}else if ((screen.width >=1367)) {
	
		$("#ln").attr({'href':'css/maps_index.css'});
		$("#ln2").attr({'href':'css/zzsc.css'});

};
	})
	
};
aa();

<template>
    <div>
        Main {{ $attrs.newsletterPopup }} Category {{ $route.params.id }}
		{{$route.params}}

    </div>
</template> 

	
<script>
	export default {
	  data () {
	    return {
	      	loading: false,
	      	post: null,
	      	error: null
	    }
	  },
	  created () {
	    // fetch the data when the view is created and the data is
	    // already being observed
	    this.fetchData()
	  },
	  watch: {
	    // call again the method if the route changes
	    '$route': 'fetchData'
	  },
	  methods: {
	    fetchData () {
	      this.error = this.post = null
	      this.loading = true
	      console.log(this);
	      // replace `getPost` with your data fetching util / API wrapper
	    }
	  }
	}
</script>


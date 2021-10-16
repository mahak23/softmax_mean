export class PageConfig {
	public defaults: any = {
		dashboard: {
			page: {
				title: 'Mehak',
				desc: 'Latest updates and statistic charts'
			},
		},
		demo: {
			page: {
				title: 'Notice',
				desc: 'Latest updates and statistic charts'
			},
		},
		error: {
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			},
			403: {
				page: { title: '403 Access Forbidden', desc: '', subheader: false }
			}
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

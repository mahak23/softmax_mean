export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Notice',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/teacher/notice',
					translate: 'MENU.NOTICE',
					bullet: 'dot',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

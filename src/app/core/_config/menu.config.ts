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
					page: '/teacher/dashboard',
					translate: 'Dashboard',
					bullet: 'dot',
				},
				{
					title: 'Profile',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/teacher/profile',
					translate: 'Profile',
					bullet: 'dot',
				},
				{
					title: 'Notice',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/teacher/notices',
					translate: 'Manage Notices',
					bullet: 'dot',
				},
				{
					title: 'Homework',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/teacher/homeworks',
					translate: 'Manage Homeworks',
					bullet: 'dot',
				},

			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

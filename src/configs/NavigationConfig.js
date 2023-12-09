import { 
  	DashboardOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
	PictureOutlined,
	GiftOutlined,
	ShopOutlined,
	UsergroupAddOutlined,
	MailOutlined,
	SettingOutlined,
	MobileOutlined,
	FileTextOutlined,
	EditOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
	{
		key: 'main',
		path: `${APP_PREFIX_PATH}/main`,
		title: 'sidenav.main',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'main-editor',
				path: `${APP_PREFIX_PATH}/main/editor`,
				title: 'sidenav.main.editor',
				icon: EditOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-dashboard',
				path: `${APP_PREFIX_PATH}/main/dashboard`,
				title: 'sidenav.main.dashboard',
				icon: DashboardOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-catalog',
				path: `${APP_PREFIX_PATH}/main/catalog`,
				title: 'sidenav.main.catalog',
				icon: ShoppingCartOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'main-catalog-products',
						path: `${APP_PREFIX_PATH}/main/catalog/products`,
						title: 'sidenav.main.catalog.products',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
					{
						key: 'main-catalog-categories',
						path: `${APP_PREFIX_PATH}/main/catalog/categories`,
						title: 'sidenav.main.catalog.categories',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
					{
						key: 'main-catalog-collections',
						path: `${APP_PREFIX_PATH}/main/catalog/collections`,
						title: 'sidenav.main.catalog.collections',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
					{
						key: 'main-catalog-combo',
						path: `${APP_PREFIX_PATH}/main/catalog/combo`,
						title: 'sidenav.main.catalog.combo',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
				],
			},
			{
				key: 'main-orders',
				path: `${APP_PREFIX_PATH}/main/orders`,
				title: 'sidenav.main.orders',
				icon: ShoppingOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-clients',
				path: `${APP_PREFIX_PATH}/main/clients`,
				title: 'sidenav.main.clients',
				icon: UserOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'main-clients-list',
						path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
						title: 'sidenav.main.clients.clientslist',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
					{
						key: 'main-clients-groups',
						path: `${APP_PREFIX_PATH}/main/clients/clients-groups`,
						title: 'sidenav.main.clients.clientsgroups',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
				],
			},
			{
				key: 'main-banners',
				path: `${APP_PREFIX_PATH}/main/banners`,
				title: 'sidenav.main.banners',
				icon: PictureOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-promocodes',
				path: `${APP_PREFIX_PATH}/main/promocodes`,
				title: 'sidenav.main.promocodes',
				icon: GiftOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-offlinePoints',
				path: `${APP_PREFIX_PATH}/main/offline-points`,
				title: 'sidenav.main.offlinePoints',
				icon: ShopOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'main-offlinePoints-addresses',
						path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
						title: 'sidenav.main.offlinePoints.addresses',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
					{
						key: 'main-offlinePoints-geofences',
						path: `${APP_PREFIX_PATH}/main/offline-points/geofences`,
						title: 'sidenav.main.offlinePoints.geofences',
						icon: '',
						breadcrumb: true,
						submenu: [],
					},
				],
			},
			{
				key: 'main-employees',
				path: `${APP_PREFIX_PATH}/main/employees`,
				title: 'sidenav.main.employees',
				icon: UsergroupAddOutlined,
				breadcrumb: false,
				submenu: [],
			},
			{
				key: 'main-mailInbox',
				path: `${APP_PREFIX_PATH}/main/mail-inbox`,
				title: 'sidenav.main.mailInbox',
				icon: MailOutlined,
				breadcrumb: false,
				submenu: [],
			},
		],
	},
];

const systemBoardNavTree = [
	{
		key: 'system',
		path: `${APP_PREFIX_PATH}/system`,
		title: 'sidenav.system',
		icon: '',
		breadcrumb: false,
		submenu: [
			{
				key: 'system-settings',
				path: `${APP_PREFIX_PATH}/system/settings`,
				title: 'sidenav.system.settings',
				icon: SettingOutlined,
				breadcrumb: true,
				submenu: [],
			},
			{
				key: 'system-mobileApp',
				path: `${APP_PREFIX_PATH}/system/mobile-app`,
				title: 'sidenav.system.mobileApp',
				icon: MobileOutlined,
				breadcrumb: true,
				submenu: [],
			},
			{
				key: 'system-logs',
				path: `${APP_PREFIX_PATH}/system/logs`,
				title: 'sidenav.system.logs',
				icon: FileTextOutlined,
				breadcrumb: true,
				submenu: [],
			},
		],
	},
];

const navigationConfig = [
  ...dashBoardNavTree, ...systemBoardNavTree
]

export default navigationConfig;

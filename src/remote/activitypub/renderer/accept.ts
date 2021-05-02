import config from '@/config';
import { User } from '@/models/entities/user';

export default (object: any, user: { id: User['id']; host: null }) => ({
	type: 'Accept',
	actor: `${config.url}/users/${user.id}`,
	object
});

import { genId } from '../../misc/gen-id';
import { Mutings, NoteWatchings } from '../../models';
import { Muting } from '../../models/entities/muting';
import { User } from '../../models/entities/user';

export default async function(muter: User, mutee: User) {
	await Mutings.save({
		id: genId(),
		createdAt: new Date(),
		muterId: muter.id,
		muteeId: mutee.id,
	} as Muting);

	NoteWatchings.delete({
		userId: muter.id,
		noteUserId: mutee.id
	});
}

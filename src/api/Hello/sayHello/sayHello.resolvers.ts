import { SayHelloResponse, SayHelloQueryArgs } from '../../../types/graph';

const resolvers = {
	Query: {
		sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
			return {
				error: false,
				text: 'love you'
			};
		}
	}
};

export default resolvers;

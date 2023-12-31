import Heading from './Heading';
import Herosection from './Herosection';
import TrendingDestination from './TrendingDestination';
import BestOffer from './BestOffer';
import ExploreFrance from './ExploreFrance';

const Main = () => {
	return (
		<main className="w-full flex-grow pl-4 pr-4">
			<Heading/>
			<Herosection/>
			<TrendingDestination/>
			<BestOffer/>
			<ExploreFrance/>
		</main>
	)
}

export default Main;
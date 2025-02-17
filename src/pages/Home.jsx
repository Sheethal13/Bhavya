
import AppBanner from '../components/shared/AppBanner';
import PortfolioBody from '../components/PortfolioBody';
import { FiArrowDownCircle } from 'react-icons/fi';

export default function Home(){
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<PortfolioBody/>
			

			<div className="mt-8 sm:mt-10 flex justify-center">
				<a
					download="bp-resume.pdf"
					href="/files/bp-resume.pdf"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Download Resume"
				>
					<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
					<span className="text-sm sm:text-lg font-general-medium duration-100">
							Resume
					</span>
				</a>
			</div>
		</div>
	);
};


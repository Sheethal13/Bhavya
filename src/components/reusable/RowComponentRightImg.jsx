import { motion } from 'framer-motion';

export default function RowComponentRightImg({ title, content }){
	return (
        <section>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
            <div className="text-center">
				<p className="font-general-medium pt-20 text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					{title}
				</p>
			</div>
				<div className="flex mt-8 p-4 justify-evenly rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                <div className="text-left px-4 py-6">
						<p className="sm:text-smaller font-general-medium text-lg max-w-screen-lg  text-ternary-dark dark:text-ternary-light mb-2">
							{content}
						</p>
						
					</div>
                    
					
				</div>
		</motion.div>
        </section>
	);
};


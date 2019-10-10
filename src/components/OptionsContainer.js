import React, { useState } from 'react';
import OptionToggle from './OptionToggle';

const OptionsContainer = ({ showOptions, backToGame }) => {
	const options = {
		upto: [10, 20],
		targets: [3, 4, 5],
		operation: ['sum', 'subtraction', 'both'],
	};

	const [selectedOptions, updateSelectedOptions] = useState({
		upto: options.upto[0],
		operation: options.operation[0],
		targets: options.targets[0],
	});

	const handleClick = (option, value) => {
		value = option === "operation" ? value : Number(value);
		updateSelectedOptions({
			...selectedOptions,
			[option]: value,
		});
	};

	const toggle = Object.keys(options)
		.map(optionKey => (
			<OptionToggle
				key={optionKey}
				label={optionKey.toUpperCase()}
				options={options[optionKey]}
				currentChoice={selectedOptions[optionKey]}
				handleClick={ event => handleClick(optionKey, event.target.innerHTML) }
			/>
		));
    
	return (
        <>
			{ showOptions && 
				<>
					<div className="backdrop" onClick={backToGame} />
					
					<div className="options-container">
                        <h4>Select your Preferred Options</h4>
                        { toggle }
                        <button onClick={backToGame} id="back-to-game">Back to Game</button>
					</div>
                </>    
            }
        </>
    )
};

export default OptionsContainer;

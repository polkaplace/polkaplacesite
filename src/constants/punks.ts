export const rarityColors = {
	1: '#EF532E',
	2: '#EFBB2E',
	3: '#702EEF',
	4: '#655BFF',
	5: '#4E7FF3'
}
export const getRarityColor = (score) => {
	
	let color = rarityColors[5];
	
	if(score < 0.00105){
		color = rarityColors[1];
	}else if(score < 0.04938922564138452){
		color = rarityColors[2];
	}else if(score < 0.062162896641662246){
		color = rarityColors[3];
	}else if(score < 0.08079717417371764){
		color = rarityColors[4];
	}

	return color;
}

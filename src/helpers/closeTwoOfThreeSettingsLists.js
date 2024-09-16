function closeTwoOfThreeSettingsList(firstListWrapper, firstList, secondListWrapper, secondList) {
    const firstWrapper = document.querySelector(firstListWrapper);
    const secondWrapper = document.querySelector(secondListWrapper);
    const firstListToClose = document.querySelector(firstList);
    const secondListToClose = document.querySelector(secondList);
        
    if (firstListToClose) {
        firstWrapper.removeChild(firstListToClose);
    }
    
    if (secondListToClose) {
        secondWrapper.removeChild(secondListToClose);
    }
}

export default closeTwoOfThreeSettingsList;
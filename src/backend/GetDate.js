const getDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0'); // Get day and pad with leading zero if needed
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get month (add 1 because months are zero-indexed) and pad with leading zero if needed
    const year = currentDate.getFullYear(); // Get full year

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

export {getDate};


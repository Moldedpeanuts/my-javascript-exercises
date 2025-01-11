const people = ['Bernard, Sandra', 'Bethea, Erl'. 'Becker, Carl', 'Bent, Silas'];

const alpha = people.sort((a, b) => {
    const [aLast, aFirst] = people.split(', ');
    const [bLast, bFirst] = people.split(', ');
    return aLast > bLast ? 1 : -1;  // compare last names alphabetically
}); 
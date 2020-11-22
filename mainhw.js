'use strict'

    const arr = ['hello', 'world', 23, '23', null];

    const filterBy = (arr, type) => arr.filter(arr => typeof arr !== type);

    console.log(filterBy( arr, 'boolean'))
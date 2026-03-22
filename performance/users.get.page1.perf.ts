import { check, sleep } from 'k6';
import http from 'k6/http';

export let options = {
    duration: '2m',
    vus: 100,
    summaryTrendStats: ['p(50)', 'p(95)', 'p(99)'],
};

export default function () {
    const url = 'https://reqres.in/api/users?page=1';

    const params = {
        headers: {
            'x-api-key': 'reqres_d2ba002ccbef47159249e32568af37f9',
        },
    };

    const res = http.get(url, params);

    check(res, {
        'status is 200': (r) => r.status === 200,
        'has body': (r) => !!r.body && String(r.body).length > 0,
    });

    sleep(1);
}
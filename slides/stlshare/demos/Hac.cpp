#include <bits/stdc++.h>

using namespace std;
using i64 = std::int64_t;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    priority_queue<pair<i64, int>, vector<pair<i64, int>>, greater<pair<i64, int>>> heap;

    vector<i64> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        heap.push({a[i], i});
    }

    std::vector<int> L(n), R(n);
    for (int i = 0; i < n; i++) {
        L[i] = i - 1;
        R[i] = i + 1;
    }

    while (k) {
        auto [x, id] = heap.top();
        heap.pop();

        if (a[id] != x) {
            heap.push({a[id], id});
            continue;
        }

        k--;
        a[id] = -1;

        if (L[id] >= 0) {
            a[L[id]] += x;
            R[L[id]] = R[id];
        }
        if (R[id] < n) {
            a[R[id]] += x;
            L[R[id]] = L[id];
        }
    }

    for (auto x : a) {
        if (x != -1) {
            std::cout << x << " ";
        }
    }
    cout << "\n";

    return 0;
}
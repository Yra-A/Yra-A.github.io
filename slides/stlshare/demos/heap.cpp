#include <bits/stdc++.h>

using namespace std;
using i64 = std::int64_t;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    priority_queue<int, vector<int>, greater<int>> heap;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        heap.push(x);
    }

    int ans = 0;

    while (heap.size() > 1) {
        int x = heap.top();
        heap.pop();
        int y = heap.top();
        heap.pop();
        ans += x + y;
        heap.push(x + y);
    }

    cout << ans << "\n";

    return 0;
}
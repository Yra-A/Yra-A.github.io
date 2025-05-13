#include <bits/stdc++.h>

int main() {	

	std::vector<int> a{0, 1, 2, 3, 4};

	// 1、获取第一个元素
	std::cout << *a.begin() << "\n";

	// 2、获取最后一个元素
	std::cout << *(a.end() - 1) << "\n";

	// 3、获取第三个元素
	std::cout << *(a.begin() + 2) << "\n";

	// 3、遍历容器
	for (std::vector<int>::iterator it = a.begin(); it != a.end(); it++) {
		std::cout << *it << " ";
	}

	return 0;
}	
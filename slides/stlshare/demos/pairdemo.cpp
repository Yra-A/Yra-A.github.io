#include <iostream>
#include <utility>

int main() {	

	std::pair<int, int> a = {114, 514};
	std::pair<std::pair<int, int>, int> c = {{1919, 810}, 1};

	// std::cout << a << "\n"; Error
	std::cout << a.first << a.second << "\n";

	a = c.first;

	std::cout << a.first << a.second << "\n";

	return 0;
}	
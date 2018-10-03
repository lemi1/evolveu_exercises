

def add(x , y):	
	return x + y


def divide(x, y):
	return x / y

def payment(hours, rate):
	return hours * rate


def countitems(list):
	occurences = {}
	for num in list:
		
		if num in occurences.keys():
			occurences[num] = occurences[num] + 1
			
		else:
			occurences[num] = 1
			
	return (occurences)

countitems([1, 6, 1, 8, 6 ])
	





# def lookupprovince():
# province ={'alberta': 1, 'british columbia': 2, 'saskachewan': 3, 'nova scotia': 4}

# 	return 'welcome' + province

#







 # def countitems(list):
# 	occurences = {}
# 	for num in list:
# 		print('in for loop:', num)	
# 		print('  is this ', occurences)	
# 		print('   loopty loop', occurences.keys())
# 		if num in occurences.keys():
# 			occurences[num] = occurences[num] + 1
# 			print('   in if  ', occurences)
# 		else:
# 			occurences[num] = 1
# 			print('   in else', occurences)
# 	print(occurences)
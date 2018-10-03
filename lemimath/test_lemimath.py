import unittest
import lemimath


class Testmath(unittest.TestCase):
	
	def test_lemi_is_justplaying(self):
		self.assertEqual('hi', 'hi')
		self.assertEqual(8, 8)

		a = lemimath.add(3,7)
		print('the value of ', a)
		self.assertEqual(10, a)

		self.assertEqual(10, lemimath.add(3,7))
		self.assertEqual(22, lemimath.add(15,7))
		self.assertEqual(17, lemimath.add(10,7))




	def test_divide(self):
		self.assertEqual(5, lemimath.divide(10, 2))
		self.assertEqual(0.4, lemimath.divide(2, 5))
		self.assertEqual(4, lemimath.divide(8, 2))


	
	def test_payment(self):
		self.assertEqual(150, lemimath.payment(10, 15))
		self.assertEqual(260, lemimath.payment(13, 20))
		self.assertEqual(760, lemimath.payment(40, 19))


	

	def test_count(self):
		self.assertEqual({1:2, 6:2, 8:1}, 
						lemimath.countitems([1, 6, 1, 8, 6 ]))
		self.assertEqual({1:2, 6:1, 8:2}, 
						lemimath.countitems([1, 6, 1, 8, 8]))
		self.assertEqual({1:2, 6:3, 8:1}, 
						lemimath.countitems([1, 6, 1, 8, 6, 6 ]))



		

	# def test_province(self):
	# 	self.assertEqual(lemimath.province(1, 'alberta'))
	# 	self.assertEqual(lemimath.province(1, 'alberta'))
	# 	self.assertEqual(lemimath.province(1, 'alberta'))
QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(2,2,2),triangle.isEquilateral(2,2,2),triangle.isEquilateral(2,2,2)?"2,2,2 is equilateral":"2,2,2 is not equilateral") ;
	assert.equal(triangle.isEquilateral(0,0,0),triangle.isEquilateral(0,0,0),triangle.isEquilateral(0,0,0)?"0,0,0 is equilateral":"0,0,0 is not equilateral") ;
	assert.equal(triangle.isEquilateral(-1,-1,-1),triangle.isEquilateral(-1,-1,-1),triangle.isEquilateral(-1,-1,-1)?"-1,-1,-1 is not equilateral":"-1,-1,-1 is not equilateral") ;
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(5,5,2),triangle.isIsosceles(5,5,2),triangle.isIsosceles(5,5,2)?"5,5,2 is isosceles":"5,5,2 is not isosceles") ;
	assert.equal(triangle.isIsosceles(2,5,5),triangle.isIsosceles(2,5,5),triangle.isIsosceles(0,0,1)?"0,0,1 is isosceles":"0,0,1 is not isosceles") ;
	assert.equal(triangle.isIsosceles(5,2,5),triangle.isIsosceles(5,2,5),triangle.isIsosceles(5,2,5)?"5,2,5 is isosceles":"5,2,5 is not isosceles") ;
	assert.equal(triangle.isIsosceles(1,1,7),triangle.isIsosceles(1,1,7),triangle.isIsosceles(1,1,7)?"1,1,7 is isosceles":"1,1,7 is not isosceles") ;
	assert.equal(triangle.isIsosceles(3,2,5),triangle.isIsosceles(3,2,5),triangle.isIsosceles(3,2,5)?"5,5,2 is isosceles":"3,2,5 is not isosceles") ;
	assert.equal(triangle.isIsosceles(0,0,1),triangle.isIsosceles(0,0,1),triangle.isIsosceles(0,0,1)?"0,0,1 is isosceles":"0,0,1 is not isosceles") ;
	assert.equal(triangle.isIsosceles(-1,-1,5),triangle.isIsosceles(-1,-1,5),triangle.isIsosceles(-1,-1,5)?"-1,-1,5 is isosceles":"-1,-1,5 is not isosceles") ;
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,2,4),triangle.isScalene(3,2,4),triangle.isScalene(3,2,4)?"3,2,4 is scalene":"3,2,4 is not scalene") ;
	assert.equal(triangle.isScalene(1,2,6),triangle.isScalene(1,2,6),triangle.isScalene(1,2,6)?"1,2,6 is scalene":"1,2,6 is not scalene") ;
});
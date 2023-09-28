import pytest
from lib.fizzbuzz import *

def test_1():
    assert PepsiCoke(1) == "1"

def test_2():
    assert PepsiCoke(2) == "2"

def test_3():
    assert PepsiCoke(3) == "Pepsi"

def test_4():
    assert PepsiCoke(5) == "Coke"

def test_5():
    assert PepsiCoke(6) == "Pepsi"

def test_6():
    assert PepsiCoke(10) == "Coke"

def test_7():
    assert PepsiCoke(15) == "PepsiCoke"

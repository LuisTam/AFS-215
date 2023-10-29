import pytest
from lib.list import List

def testAddListItem():
    list = List()
    list.addListItem("Homework")
    list.addListItem("work")
    list.addListItem("Walk dog")
    assert list.showList() == ["Homework","work", "Walk dog"]

def testFindItem():
    list = List()
    list.addListItem("Homework")
    list.addListItem("work")
    list.addListItem("Walk dog")
    list.findItem("Homework")
    assert list.showList("Homework")


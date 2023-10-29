class List:
    def __init__(self) -> None:
        self.list = []

    def addListItem(self, item):
        self.list.append(item)
    def findItem(self, item):
        return item in self
    def evaluate(self):
        for item in self.list:
            return item
    def showList(self):
        return self.list
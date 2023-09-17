class RefresherList:
    def __init__(self):
        self.data_list = []
    
    def addNumber(self, number):
        self.data_list.append(number)
    
    def addString(self, string):
        self.data_list.append(string)
    
    def addDictionary(self, dictionary):
        self.data_list.append(dictionary)
    
    def addTuple(self, tuple_item):
        self.data_list.append(tuple_item)
    
    def convertToTuple(self):
        self.data_list = tuple(self.data_list)

refresher_list = RefresherList()

refresher_list.addNumber(16)
refresher_list.addString("Hello World")
refresher_list.addDictionary({"key":"value"})
refresher_list.addTuple((1,4,7))

print("Before tuple", refresher_list.data_list)

refresher_list.convertToTuple()
print("After Tuple",refresher_list.data_list)
import numpy as np
import glob
import os
import json
import argparse


class GenJS(object):
    def __init__(self, root_dir, dir_format='A'):
        '''
        dir_format:
        A :
            -- classA {image1, image2, image3 ...}
            -- classB {image1, image2, image2 ...}
            -- ...
        B :
            -- image1 {classA, classB, classC ...}
            -- image2 {classA, classB, classC ...}
        '''
        super().__init__()
        assert dir_format in {'A', 'B'}
        self.root = root_dir
        self.format = dir_format

    def _list_file(self):
        if self.format == 'A':
            class_list = os.listdir(self.root)
            ret = []
            for class_ in class_list:
                pass
        elif self.format == 'B':
            assert NotImplementedError
        else:
            assert NotImplementedError

    def gen_js(self, path='meta_imges.js'):

        # with open('meta_images.js', 'w') as f:
        pass


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Process some integers.')
    parser.add_argument('integers',
                        metavar='N',
                        type=int,
                        nargs='+',
                        help='an integer for the accumulator')
    args = parser.parse_args()
    genjs = GenJS()
